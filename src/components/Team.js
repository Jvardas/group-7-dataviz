import React from 'react'
import { Container,Header,Icon, Card, Image } from 'semantic-ui-react';
import JV from '../images/JV_ProfilePic.jpg'
import JM from '../images/JM_ProfilePic.jpg'
import JP from '../images/JP_ProfilePic.jpg'

export default class Team extends React.Component
{
    componentDidMount() {
        this.props.onMount(this);
    }

    render() {
        return(
            <Container id={this.props.sectionId}>
                <Header as='h1'>
                    <Icon name='users' color='blue'/>
                    <Header.Content className='colorlib-heading'>
                      Γνωρίστε την ομάδα
                    </Header.Content>
                </Header>

                <Card.Group centered>
                    <Card color='red'>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='tiny'
                                circular
                                src={JV}
                            />
                            <Card.Header>Βάρδας Ιώαννης</Card.Header>
                            <Card.Meta>Software Engineer</Card.Meta>
                            <Card.Description>
                                Είμαι ένας software engineer που παρακολουθεί το μεταπτυχιακό Επιστήμης των Υπολογιστών του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών, και εργάζομαι επί του παρόντος σε μια εταιρεία που παρέχει λύσεις για άλλες επιχειρήσεις.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='teal'>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='tiny'
                                circular
                                src={JM}
                            />
                            <Card.Header>Μιχαλόπουλος Ιωάννης</Card.Header>
                            <Card.Meta>Προγραμματιστής σε ερευνητικό κέντρο</Card.Meta>
                            <Card.Description>
                                Τελείωσα το λύκειο στα Βασιλικά της Βόρειας Εύβοιας από όπου και κατάγομαι. Το 2012 αποφοίτησα στο τμήμα Μηχανικών Πληροφορικής, της Σχολής Τεχνολογικών Εφαρμογών του Τ.Ε.Ι. Δυτικής Μακεδονίας και από το 2018 έως σήμερα παρακολουθώ το 
                                ΠΜΣ Τεχνολογίες Πληροφορικής και Επικοινωνιών του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών. Από το 2013 κατοικώ στην Αθήνα όπου και εργάζομαι. Επίσης έχω ζήσει για 4 χρόνια στην πόλη της Καστοριάς λόγω σπουδών.
                                Εργάζομαι σε ένα ερευνητικό κέντρο σε θέματα ασφάλειας. Με ενδιαφέρει το κομμάτι της Εικονικής Πραγματικότητας και οι εφαρμογές της σε σημαντικούς τομείς όπως η εκπαίδευση, η υγεία και ο πολιτισμός.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card color='olive'>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='tiny'
                                circular
                                src={JP}
                            />
                            <Card.Header>Περικλειδάκης Ιωάννης</Card.Header>
                            <Card.Meta>Δάσκαλος Πληροφορικής</Card.Meta>
                            <Card.Description>
                                Είμαι δάσκαλος Πληροφορικής, με ενδιαφέροντα στην Επιστήμη Ανάλυσης Δεδομένων και στην Αλληλεπίδραση Ανθρώπου-Υπολογιστή. Αυτή την στιγμή ολοκληρώνω το Μεταπτυχιακό Τίτλο Σπουδών μου στην Πληροφορική του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>

            </Container>
        );
    }
}