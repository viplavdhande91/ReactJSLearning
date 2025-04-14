import Home from '../components/Home'
import {connect} from 'react-redux'
import { addToCart } from '../services/actions/action'

const mapStateToProps=(state: any)=>({
    // data:state.cardItems
})
const mapDispatchToProps = (dispatch: any) =>({
    addToCartHandler:(data: any) => dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;