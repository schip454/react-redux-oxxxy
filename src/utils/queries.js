export const tourItemCollectionQuery = `
  {
    fieldsCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const trackItemCollectionQuery = `
  {
    trackCollection {
      items {
        date
        title
        description
        link {
          url
        }
        cover  {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const newsItemCollectionQuery = `
  {
    newsItemCollection {
      items {
        title
        date 
        cover  {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const newsItemQuery = (id) => `
{
  newsItem(id: "${id}") {
    sys {
      id
    }
    title
    date 
    description 
    cover  {
      url
    }
  }
}
`;
