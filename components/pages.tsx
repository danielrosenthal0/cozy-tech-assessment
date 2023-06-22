import { View } from "react-native"

const Pages : FC = (props) => {
    const {currentPage, totalPages} = props;
    return (
        <View>
            <button>{currentPage}</button>
            
        </View>
    )
}

export default Pages;