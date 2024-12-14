import { useState, useEffect } from "react";

function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState(""); // النص المعروض
  const [index, setIndex] = useState(0); // مؤشر النص

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); // إضافة الحرف الحالي
        setIndex((prev) => prev + 1); // تحديث المؤشر
      }, speed);

      return () => clearTimeout(timeout); // تنظيف التايمر عند الإلغاء
    }
  }, [index, text, speed]); // التحديث يحدث عند تغيير المؤشر أو النص

  return displayedText;
}

export default useTypingEffect;
