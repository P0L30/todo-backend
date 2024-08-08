"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


import { CreateReviewInput } from "@/graphql/generated/client";
import Review from "@/models/review-model";

export async function createReview(
  parent: any,
  { input }: { input: CreateReviewInput }
) {
  try {
    // Validate input
    if (!input.studentId || !input.comment || input.rating === undefined) {
      throw new Error("Invalid input: All fields (studentId, comment, rating) are required.");
    }

    console.log("Creating review with input:", input);

    // Create the review in the database
    const newReview = await Review.create(input);

    console.log("Successfully created review:", newReview);
    return newReview;
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Error creating review");
  }
}
