export interface DodgePosition {
  x: number;
  y: number;
}

/**
 * Calculates a safe runaway coordinate for the "No" button within the container bounding box
 * Prevents button from running off-screen on mobile viewports.
 */
export function calculateNextDodgePosition(
  currentAttempt: number,
  containerWidth: number = 340,
  containerHeight: number = 220,
  buttonWidth: number = 110,
  buttonHeight: number = 40
): DodgePosition {
  const pad = 10;
  const maxX = Math.max(pad, containerWidth - buttonWidth - pad);
  const maxY = Math.max(pad, containerHeight - buttonHeight - pad);

  // Four distinct perimeter corner spots that never overlap the center
  const spots = [
    { x: maxX, y: maxY }, // Bottom-Right
    { x: pad, y: pad }, // Top-Left
    { x: maxX, y: pad }, // Top-Right
    { x: pad, y: maxY }, // Bottom-Left
    { x: Math.round((containerWidth - buttonWidth) / 2), y: pad }, // Top-Center
    { x: Math.round((containerWidth - buttonWidth) / 2), y: maxY }, // Bottom-Center
  ];

  const target = spots[currentAttempt % spots.length];
  return {
    x: Math.min(maxX, Math.max(pad, target.x)),
    y: Math.min(maxY, Math.max(pad, target.y)),
  };
}

/**
 * Calculates the growth scale of the "Yes, I Forgive You" button
 * Scales gracefully with every dodge attempt
 */
export function calculateYesButtonScale(attempts: number): number {
  if (attempts <= 0) return 1.0;
  // Grows smoothly from 1.0 up to a max cap of 1.6
  const scale = 1.0 + Math.min(attempts * 0.08, 0.6);
  return Number(scale.toFixed(2));
}

/**
 * Returns the contextual evasion quip for the current attempt
 */
export function getEvasionMessage(attempts: number, quips: string[]): string {
  if (quips.length === 0) return "Please forgive me! 🥺";
  const index = (attempts - 1) % quips.length;
  return quips[Math.max(0, index)];
}

/**
 * Generates official forgiveness verification certificate code
 */
export function generateCertificateCode(name: string, date: Date = new Date()): string {
  const sanitized = name.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 4) || 'LOVE';
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `FOREVER-${sanitized}-${year}${month}${day}`;
}
