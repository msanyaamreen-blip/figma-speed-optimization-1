package com.amphitrite.service;

import com.amphitrite.dto.ConsultationRequest;
import com.amphitrite.dto.NewsletterRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * Service for sending emails via Resend API
 */
@Service
public class EmailService {

    private final WebClient webClient;
    private final String apiKey;
    private final String recipientEmail;
    private final ObjectMapper objectMapper;

    public EmailService(
            @Value("${resend.api.key}") String apiKey,
            @Value("${resend.recipient.email}") String recipientEmail,
            WebClient.Builder webClientBuilder,
            ObjectMapper objectMapper) {
        this.apiKey = apiKey;
        this.recipientEmail = recipientEmail;
        this.objectMapper = objectMapper;
        this.webClient = webClientBuilder
                .baseUrl("https://api.resend.com")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    /**
     * Send consultation request email
     */
    public Mono<String> sendConsultationEmail(ConsultationRequest request) {
        String htmlContent = String.format(
                """
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2C5F6F;">New Consultation Request</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> %s</p>
                        <p><strong>Email:</strong> %s</p>
                        <p><strong>Phone:</strong> %s</p>
                        <p><strong>Company:</strong> %s</p>
                        <p><strong>Service Needed:</strong> %s</p>
                    </div>
                    <p style="color: #6B7280; margin-top: 20px;">This email was sent from the Amphitrite Technologies website consultation form.</p>
                </div>
                """,
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getCompany(),
                request.getService()
        );

        Map<String, Object> emailData = new HashMap<>();
        emailData.put("from", "onboarding@resend.dev");
        emailData.put("to", recipientEmail);
        emailData.put("subject", "New Consultation Request - " + request.getCompany());
        emailData.put("html", htmlContent);

        return sendEmail(emailData);
    }

    /**
     * Send newsletter subscription confirmation email
     */
    public Mono<String> sendNewsletterEmail(NewsletterRequest request) {
        String htmlContent = String.format(
                """
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2C5F6F;">New Newsletter Subscription</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <p><strong>Email:</strong> %s</p>
                    </div>
                    <p style="color: #6B7280; margin-top: 20px;">This email was sent from the Amphitrite Technologies website newsletter form.</p>
                </div>
                """,
                request.getEmail()
        );

        Map<String, Object> emailData = new HashMap<>();
        emailData.put("from", "onboarding@resend.dev");
        emailData.put("to", recipientEmail);
        emailData.put("subject", "New Newsletter Subscription");
        emailData.put("html", htmlContent);

        return sendEmail(emailData);
    }

    /**
     * Generic method to send email via Resend API
     */
    private Mono<String> sendEmail(Map<String, Object> emailData) {
        return webClient.post()
                .uri("/emails")
                .bodyValue(emailData)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(error -> {
                    System.err.println("Email sending failed: " + error.getMessage());
                    return Mono.error(new RuntimeException("Failed to send email: " + error.getMessage()));
                });
    }
}
