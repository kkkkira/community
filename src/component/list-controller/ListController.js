import React , {Component} from 'react';
import CardList from '../card-list/CardList';


const lists = {
    Card: CardList
};

class ListController extends Component {
    render(){
        const { listType, listData } = this.props,
              List = lists[listType];
        return (
             <List listData={listData} />
        )
    }
}

export default ListController
