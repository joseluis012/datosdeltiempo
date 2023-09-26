import "./searchModal.css"
import Image from 'next/image';
import iconClose from 'public/icon-close.svg';
import iconSearch from 'public/icon-search.svg';

const SearchModal = ({ interruptor, handleModal, handleClick, handleSearch }) => {
    return (
      
            <div id="searchModal" className={interruptor ? "mostrar" : ""} >
                <div id="close">
                    <button id="btn-close" onClick={handleModal}>
                        <Image id="icon-close" src={iconClose} width={24} height={24} alt="icon-close" />
                    </button>
                </div>
                <div id="searchContainer">

                    <form action="" id="search-line" onSubmit={handleSearch}>
                        <div id="box-search">
                            <Image id="icon-search" src={iconSearch} width={28} height={28} alt="icon-search" />
                            <input id="input-search" type="text" defaultValue="" placeholder="search location" />
                        </div>
                        <button id="btn-search-city">Search</button>
                    </form>

                    <div>
                        <button className="btn-menu" type="text" value="Tokio" onClick={handleClick}>
                            <span>Tokio</span><span className="btn-menu-simbolo">&gt;</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn-menu" type="text" value="Puno" onClick={handleClick}>
                            <span>Puno</span><span className="btn-menu-simbolo">&gt;</span>
                        </button>
                    </div>
                    <div>
                        <button className="btn-menu" type="text" value="Pando" onClick={handleClick}>
                            <span>Pando</span><span className="btn-menu-simbolo">&gt;</span>
                        </button>
                    </div>
                </div>

            </div>


    )
}

export default SearchModal