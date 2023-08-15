export const selectContacts = state => state.contacts.contacts;
export const selectErrorContacts = state => state.contacts.error;
export const selectLoaderContacts = state => state.contacts.isLoading;

export const selectFilter = state => state.filter.items;
export const selectErrorFilter = state => state.filter.error;
export const selectLoaderFilter = state => state.filter.isLoading;

