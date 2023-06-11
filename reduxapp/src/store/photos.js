import createAsyncSlice from "./helper/createAsyncSlice";

const photos = createAsyncSlice({
  name: "photos",
  initialState: {
    list: [],
    pages: 0,
    inifinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
      if (action.payload.legth === 0) state.inifinite = false;
    },
    removePhotos(state) {
      state.page = 0;
      state.inifinite = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions;
export const fetchPhotos = photos.asyncAction;

export const loadNewPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(fetchPhotos(page));
    dispatch(addPhotos(payload));
  };

export default photos.reducer;
