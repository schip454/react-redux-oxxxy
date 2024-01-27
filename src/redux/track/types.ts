export interface ITrack {
  cover: {
    url: string;
  };
  date: string;
  description: string;
  link: {
    url: string;
  };
  sys: { id: string };
  title: string;
}

export interface ITracksItemsState {
  items: ITrack[];
  isLoading: boolean;
  currentTrack: ITrack | null;
  currentTrackId: string | null;
}
