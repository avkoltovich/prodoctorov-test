class AlbumsList extends AbstractComponent {
  getTemplate() {
    return this._createAlbumsListTemplate();
  }

  _createAlbumsListTemplate() {
    return (
      `<ul class="user__albums-list"></ul>`
    );
  }
}
