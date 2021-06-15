import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePage: PropTypes.func,
};

function Pagination(props) {
    const { pagination, onChangePage } = props;
    const { _limit, _page, _totalRow } = pagination;
    const totalPage = Math.ceil(_totalRow / _limit);
    console.log(pagination);
    console.log(totalPage);


    const onchange = (newPage) => {
        onChangePage(newPage);
    }
    return (
        <div>
            <button disabled={_page <= 1} onClick={() => onchange(_page - 1)}>Prev</button>
            <button disabled={_page >= totalPage} onClick={() => onchange(_page + 1)}>Next</button>
        </div >
    );
}

export default Pagination;