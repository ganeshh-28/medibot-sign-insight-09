
// This file contains the mapping of input keywords to output phrases
// Based on the table provided in the requirements

export interface SymptomMapping {
  keywords: string[];
  response: string;
  condition?: string;
  advice?: string;
}

export const symptomKeywordMap: SymptomMapping[] = [
  {
    keywords: ["me fever", "fever", "high temperature"],
    response: "I am having fever / I have fever",
    condition: "You might be experiencing a fever. This could be a symptom of various conditions including common cold, flu, or infections.",
    advice: "Rest, stay hydrated, and consider taking over-the-counter fever reducers if appropriate. See a doctor if your fever is high or persists."
  },
  {
    keywords: ["experience headache", "headache", "head pain", "head hurt"],
    response: "I am experiencing headache",
    condition: "You appear to be experiencing a headache. This could be due to stress, dehydration, eyestrain, or other medical conditions.",
    advice: "Try resting in a dark, quiet room, stay hydrated, and consider appropriate pain relievers. Consult a doctor if headaches are severe or persistent."
  },
  {
    keywords: ["pain toes", "toe pain", "foot pain", "feet hurt"],
    response: "I have pain in toes",
    condition: "You're experiencing pain in your toes. This could be related to injury, arthritis, gout, or improper footwear.",
    advice: "Rest your feet, avoid tight shoes, and consider over-the-counter pain relievers. See a doctor if the pain is severe or doesn't improve."
  },
  {
    keywords: ["me recover", "recover", "feel better", "getting better"],
    response: "I am recovered",
    condition: "You're feeling better or have recovered from your previous symptoms.",
    advice: "That's great news! Continue to take care of your health with proper nutrition, hydration, and rest."
  },
  {
    keywords: ["need rest", "tired", "exhausted", "fatigue"],
    response: "You need rest",
    condition: "You appear to be experiencing fatigue or exhaustion.",
    advice: "Rest is important for recovery. Try to get adequate sleep, stay hydrated, and consider speaking with a doctor if fatigue persists."
  },
  {
    keywords: ["tell symptoms", "symptoms", "problems", "issues", "what's wrong"],
    response: "Tell me the symptoms",
    condition: "",
    advice: "Please describe all the symptoms you're experiencing, including when they started and if anything makes them better or worse."
  },
  {
    keywords: ["how you now", "how are you", "feeling"],
    response: "How are you now?",
    condition: "",
    advice: "How are you feeling now? Have your symptoms improved, worsened, or stayed the same?"
  },
  {
    keywords: ["tell history", "medical history", "past conditions"],
    response: "Tell me your history",
    condition: "",
    advice: "Understanding your medical history helps with proper diagnosis. Please share any relevant past medical conditions or treatments."
  },
  {
    keywords: ["what name", "name", "who are you"],
    response: "What is your name?",
    condition: "",
    advice: "It helps me personalize your consultation if I know your name."
  },
  {
    keywords: ["where pain", "location pain", "pain where", "hurts where"],
    response: "Where do you experience pain?",
    condition: "",
    advice: "Could you point to or describe exactly where you're feeling pain? This helps narrow down possible causes."
  },
  // Additional common conditions
  {
    keywords: ["cough", "coughing", "throat", "chest"],
    response: "I have a cough",
    condition: "You appear to be experiencing a cough. This could be related to a cold, allergies, asthma, or other respiratory conditions.",
    advice: "Stay hydrated, consider honey for soothing (if appropriate), and use over-the-counter cough medications if needed. See a doctor if the cough persists for more than a week or is severe."
  },
  {
    keywords: ["stomach", "nausea", "vomit", "stomach pain", "abdomen"],
    response: "I have stomach discomfort",
    condition: "You appear to be experiencing stomach or digestive issues. This could be due to various causes including food poisoning, indigestion, or viral infection.",
    advice: "Stay hydrated, eat bland foods, and avoid alcohol and spicy foods. Consult a doctor if symptoms are severe or persistent."
  },
  {
    keywords: ["dizzy", "dizziness", "vertigo", "faint", "light headed"],
    response: "I feel dizzy",
    condition: "You appear to be experiencing dizziness. This could be related to dehydration, low blood pressure, inner ear issues, or other medical conditions.",
    advice: "Sit or lie down to avoid falling, stay hydrated, and avoid sudden movements. Consult a doctor if dizziness is severe or recurrent."
  },
  {
    keywords: ["rash", "skin", "itchy", "hives", "spots"],
    response: "I have a skin rash",
    condition: "You appear to be experiencing a skin rash. This could be due to allergies, contact dermatitis, infections, or other skin conditions.",
    advice: "Avoid scratching, try calamine lotion or appropriate anti-itch creams, and wear loose-fitting clothing. See a doctor if the rash is widespread or worsening."
  }
];

// Helper function to find matching symptom based on user input
export const findMatchingSymptom = (input: string): SymptomMapping | undefined => {
  const lowerInput = input.toLowerCase();
  
  return symptomKeywordMap.find(mapping => 
    mapping.keywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))
  );
};
