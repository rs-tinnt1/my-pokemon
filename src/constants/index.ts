export enum EPage {
  HOME,
  PLAY,
  RESULT,
}

export interface ISettings {
  totalOfBlocks: number;
  cardsContext: number[];
  startedAt: number | null;
}
