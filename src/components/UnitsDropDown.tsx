import cogIcon from "../assets/images/icon-units.svg"
import dropdownIcon from "../assets/images/icon-dropdown.svg"

export default function UnitsDropdown() {
    return (
        <button>
            <img src={cogIcon} />
            <span>Units</span>
            <img src={dropdownIcon} />
        </button>
    )
}