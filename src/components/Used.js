import React from 'react'
import { Container,Header,Icon, Card, Image } from 'semantic-ui-react';
import react from '../images/react.png'
import suir from '../images/semantic_ui_react.png'
import tableau from '../images/tableau.jpg'

export default class Used extends React.Component
{
    componentDidMount() {
        this.props.onMount(this);
    }

    render() {
        return(
            <Container id={this.props.sectionId}>
                <Header as='h1'>
                    <Icon name='settings' color='blue'/>
                    <Header.Content className='colorlib-heading'>
                        Τεχνολογίες που χρησιμοποίηθηκαν
                    </Header.Content>
                </Header>

                <Card.Group centered>
                    <Card color='blue'>
                        <Card.Header>
                            <Image
                                centered
                                src={react}
                            />
                        </Card.Header>
                        <Card.Content>
                            <Card.Header>React Js</Card.Header>
                            <Card.Meta>Μια βιβλιοθήκη JavaScript για τη δημιουργία ιστοσελίδων</Card.Meta>
                            <Card.Description>
                                Χρησιμοποιήσαμε τη React.js για να κατασκευάσουμε την συγκεκριμένη ιστοσελίδα, αφού αναζητούσαμε κάτι καινούριο και συναρπαστικό για να μάθουμε, και είναι πολύ γνωστή 
                                για την ευκολία της, και τις διάφορες επιλογές που παρέχει
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='teal'>
                        <Card.Header>
                            <Image
                                centered
                                src={suir}
                            />
                        </Card.Header>
                        <Card.Content>
                            <Card.Header>Semantic UI React</Card.Header>
                            <Card.Meta>Semantic UI React είναι η επίσημη βιβλιοθήκη ενσωμάτωσης του Semantic UI στη React.js.</Card.Meta>
                            <Card.Description >
                                H Semantic είναι ένας εναλλακτικός τρόπος σχεδίασης μίας ιστοσελίδας, αφού παρέχει στους developers νέα και πιο όμορφα εργαλεία για την κατασκευή της ιστοσελίδας τους. Ακόμα εκτός από το Semantic UI 
                                χρησιμοποίηθηκαν και μορφοποιήσεις μέσω απλής CSS σε συγκεκριμένα σημεία.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='brown'>
                        <Card.Header>
                            <Image
                                centered
                                src={tableau}
                            />
                        </Card.Header>
                        <Card.Content>
                            <Card.Header>Tableau</Card.Header>
                            <Card.Meta>Εργαλείο οπτικοποίησης δεδομένων</Card.Meta>
                            <Card.Description >
                                To tableau είναι ένα πολύ ισχυρό εργαλείο οπτικοποίησης δεδομένων, το οποίο μας βοήθησε να μετατρέψουμε τα data μας σε εύκολες για το χρήστη οπτικοποιήσεις.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>

            </Container>
        );
    }
}