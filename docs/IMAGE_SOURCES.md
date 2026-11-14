# Image sources (NASA)

All pictures come from NASA collections, starting from **https://www.nasa.gov/images/**, which links NASA's image resources:

| Library | Used for |
|---|---|
| NASA Image and Video Library, https://images.nasa.gov (API: images-api.nasa.gov) | Apollo pictures, live search for every mission |
| Photojournal (JPL), https://science.nasa.gov/photojournal/ | Mars rover, lander and helicopter pictures (PIA numbers) |
| Artemis II lunar flyby gallery, https://www.nasa.gov/gallery/lunar-flyby/ | The Moon "through the window" style pictures |
| NASA Image of the Day, https://www.nasa.gov/image-of-the-day/ and APOD (api.nasa.gov) | Picture of the day in the footer (via the server) |
| NSSDCA image catalogue, https://nssdc.gsfc.nasa.gov | Apollo 12 / Surveyor 3 picture record |

NASA media is generally free to use with credit and no suggestion of NASA endorsement (https://www.nasa.gov/nasa-brand-center/images-and-media/). Some items belong to partners: read each credit line.

## Pinned pictures (checked on NASA pages)
Stored in `data/image_pins.json`. Each opens on a NASA page from the credit line under the picture.

| Mission | Role | Picture | ID | NASA page |
|---|---|---|---|---|
| Apollo 11 Eagle | Mission | Aldrin beside the lunar module | as11-40-5903 | https://images.nasa.gov/details/as11-40-5903 |
| Apollo 11 Eagle | Aesthetic | Artemis II: Earthset through Orion's window | art002e009288 | https://www.nasa.gov/image-detail/art002e009288/ |
| Lunar Roving Vehicles | Aesthetic | Artemis II: Moon and Earth in one frame | art002e009567 | https://www.nasa.gov/image-detail/art002e009567/ |
| ALSEP Science Stations | Aesthetic | Artemis II: crescent Earth above the lunar horizon | art002e015231 | https://www.nasa.gov/image-detail/art002e015231/ |
| Surveyor 3 | Mission | Pete Conrad with Surveyor 3 and the Apollo 12 lunar module | AS12-48-7133 | https://nssdc.gsfc.nasa.gov/imgcat/html/object_page/a12_h_48_7133.html |
| Surveyor 3 | Aesthetic | Artemis II: thin lunar crescent on the way home | art002e016354 | https://www.nasa.gov/image-detail/art002e016354/ |
| Spirit | Mission | Sunset at Mars' Gusev Crater | PIA07997 | https://photojournal.jpl.nasa.gov/catalog/PIA07997 |
| Spirit | Aesthetic | "Sunset Ridge" panorama | PIA04180 | https://photojournal.jpl.nasa.gov/catalog/PIA04180 |
| Opportunity | Mission | Duck Bay, Victoria Crater | PIA10007 | https://photojournal.jpl.nasa.gov/catalog/PIA10007 |
| Opportunity | Aesthetic | Victoria Crater from Cape Verde | PIA09104 | https://photojournal.jpl.nasa.gov/catalog/PIA09104 |
| InSight | Mission | InSight's first selfie | PIA22876 | https://photojournal.jpl.nasa.gov/catalog/PIA22876 |
| InSight | Aesthetic | InSight's final selfie | PIA25287 | https://photojournal.jpl.nasa.gov/catalog/PIA25287 |
| Ingenuity | Mission | Ingenuity's shadow during the first flight | PIA24584 | https://photojournal.jpl.nasa.gov/catalog/PIA24584 |
| Ingenuity | Aesthetic | South Séítah, Jezero Crater | PIA24793 | https://photojournal.jpl.nasa.gov/catalog/PIA24793 |

Image file addresses: Artemis II and Photojournal files follow NASA's published patterns (`images-assets.nasa.gov/image/<id>/<id>~large.jpg`, `photojournal.jpl.nasa.gov/jpeg/<PIA>.jpg`). The Apollo file addresses were not opened directly. If any pinned file fails to load, the site automatically uses a live NASA search for that picture instead.

## Not pinned yet (picked live from the NASA library)
Apollo 11 and Surveyor 3 aside, these missions pick their pictures live until you pin them: Lunar Roving Vehicles and ALSEP (mission photo), Sojourner, Viking 1, Viking 2, Phoenix, Dawn, NEAR Shoemaker, Pioneer 10, Pioneer 11, Kepler (both pictures). Run the script on a computer with internet to lock them:

    python3 scripts/pin_nasa_images.py            # keeps existing pins, fills the missing ones
    python3 scripts/pin_nasa_images.py --download # also save copies to data/img/

Each pick's title, creator and NASA ID are printed under the picture on its mission page.
