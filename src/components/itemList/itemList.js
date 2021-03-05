import React, {Component} from 'react';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import './itemList.css';

class ItemList extends Component {

    renderItems = (arr) => {

        return arr.map(item => {

            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {data} = this.props;
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            error: false
        }
    
        static defaultProps = {
            onItemSelected: () => {}
        }
        
        static propTypes = {
            onItemSelected: PropTypes.func
        }
    
        componentDidMount () {
    
            const {getData} = this.props;
    
            getData()
                .then((data) => {
                    this.setState({
                        data,
                        error: false
                    })
                })
                .catch(() => this.onError());
        }
    
        componentDidCatch(){
    
            this.setState({
                data: null,
                error: true
            })
        }
        
        onError(status){
            this.setState({
                data: null,
                error: true
            })
        }

        render () {

            const {data, error} = this.state;

            if (error) {
                return <ErrorMessage/>
            }

            if (!data) {
                return <Spinner/>
            }

            return <View {...this.props} data={data}/>
        } 
    }
}

export default withData(ItemList);