export enum EPage {
  HOME,
  PLAY,
  FINISH,
}

export interface ISettings {
  totalOfBlocks: number;
  cardsContext: number[];
  startedAt: number | null;
}
