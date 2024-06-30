<p align="center"><img src="https://masonric.com/images/masonric.png" width="800" alt="MASONRIC Logo" /></p>

# MASONRIC

MASONRIC is a minimalist Statamic Starter Kit designed to elegantly display gallery pictures, ideal for photographers, artists, and creatives. It features a clean, modern layout with a sleek logo on the top left and simple navigation on the top right, providing an intuitive user experience. The main content area includes a beautiful masonry grid that showcases pictures in a visually appealing way, making it perfect for professional portfolios or personal galleries. MASONRIC's minimalist design reduces distractions and keeps the focus on your work.

## Key Features:

- **Home Page**: The home page displays an elegant gallery masonry grid for your pictures.
- **About Page**: A simple layout with a header, hero banner and prose content.
- **Blog Page**: A 3-columns masonry grid for your blog posts.
- **Contact Page**: A basic form for collecting contact request.
- **Fully Responsive**: Looks great on all devices, from desktops to mobiles.
- **Safeguard Your Pictures**: Toggle option to disable saving the pictures from a right-click (a basic but effective deterrent).
- **Social Media Icons**: Icons available for 500px, Béhance, Dribbble, Facebook, Flickr, Github, Instagram, LinkedIN, Pinterest, Smugmug, Soundcloud, Tiktok, Tumblr, Twitter and YouTube.
- **Built with Antlers, TailwindCSS and AlpineJS**

## Masonry Grid Gallery Assets

MASONRIC's grid is powered by [markmead's AlpineJS-Masonry plugin](https://github.com/markmead/alpinejs-masonry). You can customize the number of columns (between 1 to 12) for the gallery to fit your needs in the Global settings. All the pictures displayed on the home page are in the "Gallery" asset container and uses the File Driver Disk "gallery" already configured in config/filesystems.php. The following fieldsets are available for the gallery pictures :
- Alt Text (optional)
- Linked entry (optional)
- Credits (optional)

## Collections

There are two collections **Entries** and **Pages**. Each entry is a blog post that will show in the Blog page. The main pages "About", "Blog" and "Contact" can be found in the Pages collection. By default, each page will appear in the navigation menu, a toggle option to **Show in navigation** is available to hide them from the navigation, however this mean you will need to find an alternative way to link to them.

## Global settings

- Site Name
- Tagline
- Social icons and URLS
- Gallery Columns (between 1 and 12)
- Disable right-click to Save As... (a simple but effective deterrent)
- Copyright

## Support

Support is available by e-mail at [support@masonric.com](mailto:support@masonric.com)

## Credits and special thanks
Thanks to Scott Rodgerson, David Becker, USGS, Pawel Czerwinski, Alex Shuper, Jacob S, Sebastien Cordat, Howen, Erik Hansman, Adrien Vajas and Marissa Lewis on Unsplash for the photos included.
