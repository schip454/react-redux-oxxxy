export interface INewsItem {
  cover: {
    url: string;
  };
  date: string;
  sys: { id: string };
  title: string;
  description: string;
}

export interface INewsItemsState {
  items: INewsItem[];
  item: null | INewsItem;
  isLoading: boolean;
}
