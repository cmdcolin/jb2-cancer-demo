import { makeStyles } from '@material-ui/core/styles'
import icon from './icon.ico'
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LinkIcon from '@material-ui/icons/Link'

const useStyles = makeStyles(theme => ({
  icon: {
    width: 48,
    height: 48,
    marginTop: 8,
    marginRight: 12,
  },
  title: {
    textAlign: 'center',
    flexGrow: 1,
  },
  toolbar: {
    background: '#0d233f',
  },
  paperBackground: {
    maxWidth: '800px',
    width: '90%',
    margin: '15px auto',
    padding: 15,
  },
  sectionHeader: {
    marginLeft: 10,
  },
  sectionBody: {
    margin: 10,
    lineHeight: 1.4,
  },
  linkFooter: {
    textAlign: 'center',
    lineHeight: 2,
  },
  navPath: {
    backgroundColor: '#0d233f',
    color: '#fff',
    padding: 5,
    borderRadius: 8,
  },
  figure: {
    width: '100%',
  },
  clickableImage: {
    border: '2px solid #0d233f',
    display: 'flex',
    alignContent: 'center',
    borderRadius: 4,
    padding: 5,
  },
  unclickableImage: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 5,
  },
  anchor: {
    fontSize: 15,
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          <img alt="logo" src={icon} className={classes.icon} />
          JBrowse 2 Cancer Demo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function Introduction() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#introduction"
          name="introduction"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h6">
          Introduction
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            Cancer is a very complex disease that is fundamentally genetic.
            Cancer genomes frequently have structural variants and driver
            mutations that can be inspected in a genome browser. To help aid
            cancer genomics visualization, JBrowse 2 adds many new features
            including{' '}
            <ul>
              <li>Improved structural variant visualization</li>
              <li>Whole genome overviews</li>
              <li>Comparative genomics features</li>
            </ul>
            This demo will use a variety of new powerful features of JBrowse 2
            to analyze the{' '}
            <a
              href="http://schatz-lab.org/publications/SKBR3/"
              target="_blank"
              rel="noreferrer"
            >
              SKBR3
            </a>{' '}
            sequencing data made publicly available by the{' '}
            <a href="http://schatz-lab.org/" target="_blank" rel="noreferrer">
              Schatz Lab
            </a>{' '}
            at Johns Hopkins University.{' '}
          </p>
          <p>You can follow along by using links below!</p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function ClickableImage(props) {
  const classes = useStyles()
  return (
    <div className={classes.clickableImage}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img className={classes.figure} src={props.imgSrc} alt={props.imgAlt} />
      </a>
    </div>
  )
}

function UnclickableImage(props) {
  const classes = useStyles()
  return (
    <div className={classes.unclickableImage}>
      <img className={classes.figure} src={props.imgSrc} alt={props.imgAlt} />
    </div>
  )
}

function GlobalView() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#global-view"
          name="global-view"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h6">
          SV inspector
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            JBrowse 2 adds a feature called the SV inspector that shows a
            whole-genome circular overview along with a filterable table of
            features. Users can upload their own VCF, BEDPE, STAR-fusion, or
            other file types to the SV inspector. The SV inspector can be opened
            from the menu bar:{' '}
            <strong className={classes.navPath}>
              Add {'-->'} SV Inspector
            </strong>
          </p>
          <p>
            Here is a link to a live demo using the SV Inspector loaded with
            SKBR3 variants called using Sniffles:{' '}
            <a
              href="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-0kAlMo4Ltr&password=ihc53"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </p>
          <ClickableImage
            link="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-0kAlMo4Ltr&password=ihc53"
            imgSrc="skbr3-sv-inspector.png"
            imgAlt="JBrowse 2 SV inspector with SKBR3 data"
          />
          <p>
            This view shows all the inter-chromosomal translocation
            (&lt;TRA&gt;) calls from the Sniffles dataset. We can see many of
            the arcs originate from chr8, and we can even create a filter for
            all translocations originating from chr8 by typing in the filter
            box. The circular view and table will update themselves in response
          </p>
          <ClickableImage
            link="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-apCLknrDn7&password=dWQnr"
            imgSrc="skbr3-sv-inspector-chr8.png"
            imgAlt="JBrowse 2 SV inspector with SKBR3 data for chr8"
          />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function DrillingDown() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#drilling-down"
          name="drilling-down"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h6">
          Breakpoint split view
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            From the SV inspector, we can click on individual arcs or rows in
            the table to open up what we call the breakpoint split view. This
            opens up both sides of a interchromosomal translocation event, and
            can be used to show the read evidence that joins these two places,
            as well as load other annotations to infer gene fusions for example.
          </p>
          <ClickableImage
            link="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-ousEiZkmfW&password=9YFK1"
            imgSrc="skbr3-click.png"
            imgAlt="Clicking on an arc"
          />
          <p>
            Here, we are clicking on an arc in the circular view (highlighted
            black), and it pops open a view below.
          </p>
          <ClickableImage
            link="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-ousEiZkmfW&password=9YFK1"
            imgSrc="skbr3-split-detail.png"
            imgAlt="SKBR3 chrom8 chrom17 split detail view"
          />
          <p>
            The curved black lines show reads that are split-aligned to the
            multiple chromosomes in this case. The green line shows the VCF
            variant calls for this translocation even also.
          </p>

          <p>
            Clicking on the "linear read vs. ref" option will open the following{' '}
            <strong>view</strong>:
          </p>
          <ClickableImage
            link="https://jbrowse.org/code/jb2/v1.6.9/?config=test_data%2Fconfig_demo.json&session=share-ZzPm6DASnc&password=SQBSk"
            imgSrc="skbr3-linear-vs-ref.png"
            imgAlt="A linear vs. ref view of a SKBR3 PacBio read"
          />
          <p>
            This figure, which appears sort of like a synteny visualization,
            shows that a snippet of chr8 appears to have been translocated onto
            chr11
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function Sharing() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#sharing"
          name="sharing"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h6">
          Sharing With Collaborators
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            When you discover an important or interest aspect of your data, it
            is important to be able to quickly and easily share what you have
            found with your collaborators. An exciting new aspect of JBrowse 2
            is that you can easily share the entire state of your current
            session including data or tracks you may have loaded with the click
            of a button. Clicking the "Share" button in the top center of
            JBrowse 2 will open the following menu:
          </p>
          <UnclickableImage
            imgSrc="jbrowse-share.png"
            imgAlt="the form to share a JBrowse 2 session"
          />
          <p>
            Behind the scenes, this creates an end-to-end encrypted copy of your
            session that only people with the generated link will have access
            to. This link can be copied to your clipboard, and sent to
            collaborators. They will be able to easily load up the same session
            in their browser by accessing the link.
          </p>
          {/* add "click to tweet" link here */}
          <p>
            To give it a spin, try looking for a <strong>view</strong> that you
            find exciting, and share it with us on Twitter! We would love to see
            your awesome findings!
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function Conclusion() {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <a
          className={classes.anchor}
          href="#conclusion"
          name="conclusion"
          onClick={event => event.stopPropagation()}
        >
          <LinkIcon />
        </a>
        <Typography className={classes.sectionHeader} variant="h6">
          Conclusion
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.sectionBody}>
          <p>
            We have reached the end of this JBrowse 2 demo for cancer genomics!
            Hopefully this has given a taste of how JBrowse 2 can handle a wide
            variety of data types and formats, and provides powerful{' '}
            <strong>views</strong> that can connect disparate information
            together coherently to provide insight. We think that this is one of
            the things that makes JBrowse 2 a really special platform for
            genomics visualization and analysis.
          </p>
          <p>
            If you have questions or ideas about how to use JBrowse 2, please
            get in touch with the developers on our{' '}
            <a
              href="https://gitter.im/GMOD/jbrowse2"
              target="_blank"
              rel="noreferrer"
            >
              Gitter channel.
            </a>
          </p>
          <p style={{ textAlign: 'center', marginTop: '3em' }}>
            🧬 Happy genome browsing! 🧬
          </p>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

function App() {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Paper className={classes.paperBackground} elevation={3}>
        <Introduction />
        <GlobalView />
        <DrillingDown />
        <Conclusion />
      </Paper>
    </div>
  )
}

export default App
