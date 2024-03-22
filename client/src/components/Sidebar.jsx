import React from "react";
import { Outlet } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    CodeBracketIcon,
    UserIcon,
    SpeakerWaveIcon,
    DocumentIcon,
    ServerStackIcon,
    BeakerIcon,
    CogIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import '../sidebar.css'

const SidebarComponent = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-sidebar text-white">
            <List>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <CodeBracketIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto text-base">
                                Get API
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <ListItem>
                            <Link className="text-sm flex items-center w-72" to="/api/all">
                                <ListItemPrefix>
                                    <DocumentIcon strokeWidth={2} className="h-4 w-4" />
                                </ListItemPrefix>
                                All
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className="text-sm flex items-center w-72" to="/api/characters">
                                <ListItemPrefix>
                                    <UserIcon strokeWidth={2} className="h-4 w-4" />
                                </ListItemPrefix>
                                Characters
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className="text-sm flex items-center w-72" to="/api/soundtracks">
                                <ListItemPrefix>
                                    <SpeakerWaveIcon strokeWidth={2} className="h-4 w-4" />
                                </ListItemPrefix>
                                Soundtracks
                            </Link>
                        </ListItem>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <CogIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto text-base">
                                Resources
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <Link className="text-sm flex items-center w-72" to="/api/postman">
                                    <ListItemPrefix>
                                        <ServerStackIcon strokeWidth={2} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    Postman
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link className="text-sm flex items-center w-72" to="/api/thunderclient">
                                    <ListItemPrefix>
                                        <BeakerIcon strokeWidth={2} className="h-4 w-4" />
                                    </ListItemPrefix>
                                    ThunderClient
                                </Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>
            <Outlet />
        </Card>
    );
};

export default SidebarComponent;