export default function SidebarPhoto() {
    return (
        <nav className="sidenavp">
            <ul className="text-left space-y-2"> 
                <li>2025
                    <div className="grid grid-cols-2 gap-2">
                        <img src="https://transgressiverecords.com/wp-content/uploads/2023/09/Screenshot-2025-01-30-at-10.44.52.png" alt="Photo 1" className="w-full h-auto rounded" />
                        <img src="https://via.placeholder.com/100" alt="Photo 2" className="w-full h-auto rounded" />
                        <img src="https://via.placeholder.com/100" alt="Photo 3" className="w-full h-auto rounded" />
                        <img src="https://via.placeholder.com/100" alt="Photo 4" className="w-full h-auto rounded" />
                    </div>
                </li>
                <li>2024</li>
                <li>2023</li>
            </ul>
        </nav>
    );
}