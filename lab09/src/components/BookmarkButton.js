import React from 'react';
import {getHeaders} from '../utils';

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('unbookmark');
            this.unbookmark();
        } else {
            console.log('bookmark');
            this.bookmark();
        }
        this.props.requeryPost();
    }

    bookmark() {
        console.log('code to bookmark the post');

        const postData = {
            "post_id": this.props.postId
        };
    
        fetch("/api/bookmarks/", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(postData)
        })
            .then(response => response.json());
    }

    unbookmark() {
        console.log('code to unbookmark the post');
        fetch(`/api/bookmarks/${this.props.bookmarkId}`, {
            method: "DELETE",
            headers: getHeaders()
        })
            .then(response => response.json())
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                  
            </button>
        ) 
    }
}

export default BookmarkButton;
