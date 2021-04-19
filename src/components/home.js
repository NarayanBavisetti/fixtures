import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase'
// import { db} from '../firebase';

class Home extends Component {
    state = {
        user : {},
        key: '',
       
      };
    componentDidMount() {
        const ref = db.collection('Users').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              user: doc.data(),
              key: doc.id,
              isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }
      render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
              <h4><Link to="/">Board List</Link></h4>
                <h3 class="panel-title">
                  {this.state.user.username}
                </h3>
              </div>
              <div class="panel-body">
                <dl>
                  <dt>Description:</dt>
                  <dd>{this.state.user.password}</dd>
                </dl>
                {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button> */}
               
                {/* <button  class="btn btn-success">Comment</button>
             < BlogCommentAdd key={this.state.key} />
              <BlogCommentList comment={this.state.comment} /> */}
              </div>
            </div>
          </div>
        );
      }
    }

export default Home