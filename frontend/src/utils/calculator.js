/**
 * Utility functions for Korat Chicken calculations
 */

/**
 * คำนวณ Feed Conversion Ratio (FCR) - อัตราแลกเนื้อ
 * @param {number} totalFeedKg - น้ำหนักอาหารทั้งหมดที่ใช้ (กิโลกรัม)
 * @param {number} totalWeightGainKg - น้ำหนักตัวไก่ที่เพิ่มขึ้นรวม (กิโลกรัม)
 * @returns {number} ค่า FCR
 */
export function calculateFCR(totalFeedKg, totalWeightGainKg) {
  if (!totalWeightGainKg || totalWeightGainKg <= 0) return 0;
  return Number((totalFeedKg / totalWeightGainKg).toFixed(2));
}

/**
 * ประเมินปริมาณอาหารที่ต้องใช้ต่อวันตามจำนวนไก่และอายุ (สัปดาห์)
 * @param {number} chickenCount - จำนวนไก่
 * @param {number} ageWeeks - อายุไก่ (สัปดาห์)
 * @returns {number} ปริมาณอาหารที่แนะนำ (กิโลกรัม/วัน)
 */
export function estimateDailyFeed(chickenCount, ageWeeks) {
  // ค่าเฉลี่ยประมาณการกินอาหารต่อตัวต่อวัน (กรัม)
  let feedPerBirdGram = 30;
  if (ageWeeks <= 2) feedPerBirdGram = 25;
  else if (ageWeeks <= 4) feedPerBirdGram = 50;
  else if (ageWeeks <= 6) feedPerBirdGram = 75;
  else if (ageWeeks <= 8) feedPerBirdGram = 95;
  else feedPerBirdGram = 110;

  const totalGram = chickenCount * feedPerBirdGram;
  return Number((totalGram / 1000).toFixed(2));
}
