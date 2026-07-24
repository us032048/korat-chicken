/**
 * Utility functions for Korat Chicken calculations
 */

/**
 * คำนวณ Feed Conversion Ratio (FCR) - อัตราแลกเนื้อ
 */
export function calculateFCR(totalFeedKg: number, totalWeightGainKg: number): number {
  if (!totalWeightGainKg || totalWeightGainKg <= 0) return 0;
  return Number((totalFeedKg / totalWeightGainKg).toFixed(2));
}

/**
 * ประเมินปริมาณอาหารที่ต้องใช้ต่อวันตามจำนวนไก่และอายุ (สัปดาห์)
 */
export function estimateDailyFeed(chickenCount: number, ageWeeks: number): number {
  let feedPerBirdGram = 30;
  if (ageWeeks <= 2) feedPerBirdGram = 25;
  else if (ageWeeks <= 4) feedPerBirdGram = 50;
  else if (ageWeeks <= 6) feedPerBirdGram = 75;
  else if (ageWeeks <= 8) feedPerBirdGram = 95;
  else feedPerBirdGram = 110;

  const totalGram = chickenCount * feedPerBirdGram;
  return Number((totalGram / 1000).toFixed(2));
}
