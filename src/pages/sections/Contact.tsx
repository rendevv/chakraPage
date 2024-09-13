import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // WhatsApp URL
    const whatsappURL = `https://wa.me/6283122895534?text=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open WhatsApp with the data
    window.open(whatsappURL, "_blank");

    // Show toast notification
    toast({
      title: "Message Sent",
      description: "Your message has been sent to WhatsApp.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      id="contact"
      maxW="container"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.50"
    >
      {/* Contact Section Heading */}
      <Box textAlign="center" mb={8}>
        <Heading fontSize={["2xl", "3xl", "4xl"]}>Contact Us</Heading>
        <Text fontSize={["md", "lg"]} mt={4} color="gray.600">
          Have questions or want to collaborate? Fill out the form below, and
          we’ll get back to you as soon as possible.
        </Text>
      </Box>

      {/* Contact Form */}
      <Box maxW="md" mx="auto">
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="message" mb={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            />
          </FormControl>

          <Button
            colorScheme="teal"
            type="submit"
            width="full"
            size="lg"
            mt={4}
          >
            Send via WhatsApp
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
