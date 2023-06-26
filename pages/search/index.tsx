import Container from "../../components/container";
import SearchResults from "../../components/search/results";

const SearchPage = () => {
    return (
        <Container>
            <div style={{width:'100%', display:'flex', flexDirection:'row', height:'100%', justifyContent:'space-between', paddingRight:0}}>
                <SearchResults/>
            </div>
        </Container>
    )
}

export default SearchPage;