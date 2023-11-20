import { Component } from 'react';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    key: Date.now(),
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page ||
      prevState.key !== this.state.key
    ) {
      // ОТРЕЗАТЬ ID ЗАПРОСА ИЗ QUERY
      // делаем http запрос с query и page
      // записываем результат в images
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: `${newQuery}`,
      page: 1,
      images: [],
      key: Date.now(),
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>

        <div>Gallery</div>

        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
