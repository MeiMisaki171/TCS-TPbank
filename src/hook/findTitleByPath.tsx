export const findTitleByPath = (menuData : any, path : any) => {
        for (const menuItem of menuData) {
          if (menuItem.url && menuItem.url === path) {
            return menuItem.title;
          }
    
          if (menuItem.children) {
            const childTitle : any = findTitleByPath(menuItem.children, path);
            if (childTitle) {
              return childTitle;
            }
          }
        }
        return null;
      }
