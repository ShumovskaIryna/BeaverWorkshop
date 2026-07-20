"use client"
import { useState } from 'react';

export default function BeaverMin() {
  const [showBeaver, setShowBeaver] = useState(true);

  return (
    <div className="relative">
    
      {/* Beaver */}
      {showBeaver && (
        <div
          className={`fixed bottom-5 right-4 sm:right-10 lg:right-[120px] z-50 scale-character`}
        >
          <img
            src="https://beaver-workshop.s3.us-east-1.amazonaws.com/images/BeaverM.png"
            alt="Бобер"
            className="w-[30vw] sm:w-[60vw] md:w-[30vw] h-auto"
          />
        </div>
      )}
    </div>
  );
}