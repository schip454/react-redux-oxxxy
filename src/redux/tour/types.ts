export interface ITourItem {
  date: string;
  country: string;
  city: string;
  place: string;
  ticketLink?: string | null;
  videoLink: string;
  soldOut: boolean;
  sys: {
    id: string;
  };
}

export interface ITourItemsSliceState {
  items: ITourItem[];
  isLoading: boolean;
}
