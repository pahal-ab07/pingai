"use client";

import Image from "next/image";

export const HomeView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-green-100 via-white to-green-50 dark:from-sidebar-accent dark:via-background dark:to-sidebar-accent/60 transition-colors duration-500">
      <div className="flex flex-col items-center gap-8 p-10 md:p-14 rounded-3xl shadow-2xl bg-white/80 dark:bg-card/90 border border-border/30 backdrop-blur-md">
        <Image src="/logo.svg" alt="Ping.AI Logo" width={72} height={72} className="mb-2 drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-400 tracking-tight text-center drop-shadow-sm">
          Welcome to <span className="text-green-600 dark:text-green-300">Ping.AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center max-w-2xl leading-relaxed font-medium">
          Your <span className="text-green-600 dark:text-green-300 font-semibold">AI-powered meeting assistant</span> for smarter, more productive conversations.<br/>
          <span className="text-gray-500 dark:text-gray-400">Summarize, revisit, and get insights from your meetings—instantly.</span>
        </p>
        <div className="w-full flex justify-center">
          <Image src="/empty.svg" alt="Meetings Illustration" width={260} height={200} className="mt-2 rounded-xl shadow-md border border-green-100 dark:border-green-900 bg-green-50 dark:bg-sidebar-accent/30" />
        </div>
      </div>
    </div>
  );
};