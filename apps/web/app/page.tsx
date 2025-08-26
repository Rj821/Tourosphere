"use client";
import { motion } from "framer-motion";
import { ThemeToggle } from "../components/theme-toggle";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen container py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tourosphere</h1>
        <ThemeToggle />
      </div>
      <motion.section
        className="mt-10 grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Explore</h2>
          <p className="text-muted-foreground">Discover trending places and stories.</p>
          <Button className="mt-4">Get Started</Button>
        </div>
        <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Your Feed</h2>
          <p className="text-muted-foreground">A personalized stream of travel posts.</p>
          <Button variant="secondary" className="mt-4">Open Feed</Button>
        </div>
      </motion.section>
    </main>
  );
}