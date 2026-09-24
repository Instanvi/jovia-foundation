"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl p-4 sm:p-6 bg-black text-white">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <h3 className="text-xl font-bold text-white">The Jovia Journey</h3>
            <p className="text-xs text-gray-300">
              Transforming possibilities for children with disabilities in Cameroon & Canada
            </p>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center border border-white/10 shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="Jovia Foundation Story Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-3 bg-white/5 rounded-xl text-xs text-gray-300 flex items-center justify-between">
          <span>Inspiring inclusion, breaking barriers, and nurturing abilities every day.</span>
          <span className="text-[var(--foundation-accent)] font-semibold">#EveryChildEveryAbility</span>
        </div>
      </div>
    </Modal>
  );
}
