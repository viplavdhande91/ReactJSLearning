import {connect} from 'react-redux'
import Header from '../components/Headers'
const mapStateToProps=(state: { cardItems: any })=>({
    data:state.cardItems
})
const mapDispatchToProps=(dispatch: any)=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;