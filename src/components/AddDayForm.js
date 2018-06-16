import {PropTypes ,Component} from 'react'

const tahoeResorts = [
    "Alpine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl" 
]

class Autocomplete extends Component {

    get value() {
        return this.refs.inputResort.value
    }

    set value(inputValue){
        this.refs.inputResort.value=inputValue
    }

    render() {
        return (
            <div> 
                <input ref="inputResort"
                       type="text"
                       list="tahoe-resorts" />
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt,i) => 
                        <option key={i}>{opt}</option>)
                    }
                </datalist>
            </div>
        )
    }
}

export class AddDayForm extends Component {

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()

        this.props.onNewDay({resort:this.refs.resort.value,
         date:this.refs.date.value,
         powder:this.refs.powder.checked,
         backcountry:this.refs.backcountry.checked })

         this.refs.resort.value=""
         this.refs.date.value=""
         this.refs.powder.checked=false
         this.refs.backcountry.checked=false
    }

    render() {

        const {resort,date, powder, backcountry} = this.props

        return (
            <form onSubmit={this.submit} className="add-day">
                <label htmlFor="resort"> Resort Name </label>
                <Autocomplete options={tahoeResorts}
                       ref="resort"/>

                <label htmlFor="date"> Date </label>
                <input id="date" 
                       type="date" 
                       required 
                       defaultValue={date}
                       ref="date"/>

                <div> 
                    <input id="powder" 
                           type="checkbox" 
                           defaultChecked={powder}
                           ref="powder"/>
                    <label htmlFor="powder"> Powder Day </label>
                </div>
                
                <div> 
                    <input id="backcountry" 
                           type="checkbox" 
                           defaultChecked={backcountry}
                           ref="backcountry"/>
                    <label htmlFor="backcountry"> Backcountry </label>
                </div>
                <button> Add Day </button>
            </form> 
        )
    }

}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.PropTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}