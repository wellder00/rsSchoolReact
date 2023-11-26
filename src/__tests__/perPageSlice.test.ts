import itemsAmountReducer, {
  changeItemsAmount,
  changeOffsetAmount,
  changeCurrentPage,
  changeLastPage,
  changeCount,
} from '../lib/redux/slices/itemsPerPageSlice';

describe('pokemonSlice', () => {
  it('test default state', () => {
    const res = itemsAmountReducer(undefined, { type: '' });
    expect(res).toEqual({
      currentPage: '1',
      itemsAmount: '3',
      lastPage: '',
      offset: '0',
      count: '',
    });
  });

  it('should save items amount', () => {
    const action = { type: changeItemsAmount.type, payload: '20' };
    const res = itemsAmountReducer(
      {
        itemsAmount: '10',
        offset: '0',
        currentPage: '1',
        lastPage: '',
        count: '',
      },
      action
    );
    expect(res.itemsAmount).toBe('20');
    expect(res.offset).toBe('0');
    expect(res.currentPage).toBe('1');
    expect(res.lastPage).toBe('');
    expect(res.count).toBe('');
  });

  it('should save items offset', () => {
    const action = { type: changeOffsetAmount.type, payload: '20' };
    const res = itemsAmountReducer(
      {
        itemsAmount: '10',
        offset: '0',
        currentPage: '1',
        lastPage: '',
        count: '',
      },
      action
    );
    expect(res.itemsAmount).toBe('10');
    expect(res.offset).toBe('20');
    expect(res.currentPage).toBe('1');
    expect(res.lastPage).toBe('');
    expect(res.count).toBe('');
  });

  it('should save items currentPage', () => {
    const action = { type: changeCurrentPage.type, payload: '120' };
    const res = itemsAmountReducer(
      {
        itemsAmount: '10',
        offset: '0',
        currentPage: '1',
        lastPage: '',
        count: '',
      },
      action
    );
    expect(res.itemsAmount).toBe('10');
    expect(res.offset).toBe('0');
    expect(res.currentPage).toBe('120');
    expect(res.lastPage).toBe('');
    expect(res.count).toBe('');
  });

  it('should save items lastPage', () => {
    const action = { type: changeLastPage.type, payload: '10' };
    const initialState = {
      itemsAmount: '10',
      offset: '0',
      currentPage: '1',
      lastPage: '',
      count: '',
    };

    const res = itemsAmountReducer(initialState, action);

    expect(res.itemsAmount).toBe('10');
    expect(res.offset).toBe('0');
    expect(res.currentPage).toBe('1');
    expect(res.lastPage).toBe('10');
    expect(res.count).toBe('');
  });
  it('should save count', () => {
    const action = { type: changeCount.type, payload: '10' };
    const initialState = {
      itemsAmount: '10',
      offset: '0',
      currentPage: '1',
      lastPage: '',
      count: '',
    };

    const res = itemsAmountReducer(initialState, action);

    expect(res.itemsAmount).toBe('10');
    expect(res.offset).toBe('0');
    expect(res.currentPage).toBe('1');
    expect(res.lastPage).toBe('');
    expect(res.count).toBe('10');
  });
});
