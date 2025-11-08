package com.amphitrite.controller;

import com.amphitrite.dto.ApiResponse;
import com.amphitrite.dto.ConsultationRequest;
import com.amphitrite.dto.NewsletterRequest;
import com.amphitrite.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller for handling email-related endpoints
 */
@RestController
@RequestMapping("/api")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    /**
     * Send consultation request email
     * POST /api/consultation
     */
    @PostMapping("/consultation")
    public ResponseEntity<ApiResponse> sendConsultation(@Valid @RequestBody ConsultationRequest request) {
        try {
            emailService.sendConsultationEmail(request).block();
            return ResponseEntity.ok(
                    ApiResponse.success("Consultation request sent successfully!")
            );
        } catch (Exception e) {
            System.err.println("Error sending consultation email: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to send consultation request. Please try again."));
        }
    }

    /**
     * Send newsletter subscription email
     * POST /api/newsletter
     */
    @PostMapping("/newsletter")
    public ResponseEntity<ApiResponse> sendNewsletter(@Valid @RequestBody NewsletterRequest request) {
        try {
            emailService.sendNewsletterEmail(request).block();
            return ResponseEntity.ok(
                    ApiResponse.success("Newsletter subscription successful!")
            );
        } catch (Exception e) {
            System.err.println("Error sending newsletter email: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.error("Failed to subscribe to newsletter. Please try again."));
        }
    }

    /**
     * Health check endpoint
     * GET /api/health
     */
    @GetMapping("/health")
    public ResponseEntity<ApiResponse> healthCheck() {
        return ResponseEntity.ok(
                ApiResponse.success("Server is running")
        );
    }
}
