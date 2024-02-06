import React from "react";

export function useSpeech(): { speak(message: string): void } {
  React.useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const speak = React.useCallback((message: string) => {
    const utterance = new SpeechSynthesisUtterance(
      message.replaceAll(" - ", " ")
    );
    utterance.text = message.replaceAll(" - ", " ");
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
}
