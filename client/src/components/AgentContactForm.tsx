import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "./ui/dialog.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form.tsx";
import { Input } from "./ui/input.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Button } from "./ui/button.tsx";
import { useToast } from "../hooks/use-toast.ts";

interface AgentContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  agentName: string;
  agentEmail: string;
}

export default function AgentContactForm({
  isOpen,
  onClose,
  agentName,
  agentEmail
}: AgentContactFormProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form schema
  const formSchema = z.object({
    name: z.string().min(2, t('forms.errors.nameRequired')),
    email: z.string().email(t('forms.errors.emailInvalid')),
    company: z.string().optional(),
    message: z.string().min(10, t('forms.errors.messageRequired'))
  });

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Submit data to the API with the agent's email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recipient: agentEmail,
          subject: `Contact Request for ${agentName}`
        }),
      });

      if (!response.ok) {
        throw new Error(t('forms.errors.submitFailed'));
      }

      toast({
        title: t('forms.success.title'),
        description: t('forms.success.messageSent'),
        variant: "default",
      });

      // Close the form and reset
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t('forms.errors.title'),
        description: t('forms.errors.submitFailed'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('agents.contactForm.title', { name: agentName })}</DialogTitle>
          <DialogDescription>
            {t('agents.contactForm.description')}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.labels.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.placeholders.name')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.labels.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.placeholders.email')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.labels.company')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.placeholders.company')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('forms.labels.message')}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('forms.placeholders.message')} 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                {t('buttons.cancel')}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('buttons.sending') : t('buttons.send')}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 