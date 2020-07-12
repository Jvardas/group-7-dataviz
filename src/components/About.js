import React, {Component} from 'react'
import './About.scss'
import video from '../images/video.png'
import {Container, Form, Embed, Header, Icon} from 'semantic-ui-react'

export default class About extends Component{
    componentDidMount() {
        this.props.onMount(this);
    }
    render() {
        return(
            <Container id={this.props.sectionId}>
                <br/>
                <Header as='h1' >
                    <Icon name='archive' color='blue'/>
                    <Header.Content className='colorlib-heading'>
                        Σχετικα με το Project
                    </Header.Content>
                </Header>
                <Form>
                    <h2 className="colorlib-heading">Οι στοχοι της εργασιας</h2>
                    <p>Στοχος της εργασίας είναι η ανάλυση στατιστικων δεδομένων τα οποία προέρχονται από το χώρο της εκπαίδευσης και κατάρτισης στην Ευρωπαϊκή Ένωση ώστε να εξαχθούν συμπεράσματα σχετικά με την ισότητα των ευκαιριών σε διάφορες χώρες με βάση τις οπτικοποιήσεις που φαίνονται παρακάτω.
                    Στο σύνολο δεδομένων που εξετάσαμε, περιλαμβάνονται δείκτες οικονομικής και κοινωνικής ευημερίας (όπως η ανισότητα στο εισόδημα ή ο δείκτης ανεργίας) καθώς και δεδομένα που αφορούν στην εκπαίδευση (για παράδειγμα η σχολική διαρροή και
                    ο αποκλεισμός από την πρόσβαση στην εκπαίδευση). Στα γραφήματα που παράγαμε, με τις αντίστοιχες συσχετίσεις μεταξύ οικονομικών και κοινωνικών μεγεθών, ο χρήστης μπορεί να περιηγηθεί με διαδραστικό τρόπο.</p>
                    <p>Στόχος μας ήταν να μελετήσουμε και να αναδείξουμε με ποιό τρόπο οι ανισότητες που εντοπίζονται στο πεδίο της οικονομίας διαιωνίζουν και αναπαράγουν ανισότητες που έχουν να κάνουν με την πρόσβαση των πολιτών στην εκπαίδευση και σε ευκαιρίες
                    κατάρτισης στις Ευρωπαϊκές χώρες και κοινότητες.</p>
                </Form>
                <br/><br/>
                <Form>
                    <h2 className="colorlib-heading"><Icon name='database' color='blue' size='big' /> Datasets</h2>
                    <p>Αντλήθηκαν δεδομένα από τον Ευρωπαϊκό Οργανισμό “Eurostat”. Τα datasets που χρησιμοποιήθηκαν βρίσκονται στο ακόλουθο 
                        <a href='https://ec.europa.eu/eurostat/web/european-pillar-of-social-rights/indicators/data-by-region'> link</a>.
                        Χρησιμοποιήθηκε ένας συνδυασμός από τα αναγραφόμενα datasets για να καταλήξουμε στα συμπεράσματά μας.
                    </p>
                </Form>
                <br/><br/>
                <Form>
                    <h2 className="colorlib-heading"><Icon name='video' color='blue' size='big' /> Video</h2>
                    <Embed source='vimeo' id="437672319" placeholder={video}></Embed>
                </Form>
                <br/><br/><br/>
            </Container>
        )
    }
}