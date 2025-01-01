// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-4 mt-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; Copyright 2024 <span className="font-bold">Fams Care</span>.
                    Semua Hak Cipta Dilindungi.
                </p>
                <p className="text-xs mt-2">
                    Dibuat dengan{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>{" "}
                    oleh Tim Pengembang Kami
                </p>
            </div>
        </footer>
    );
};

export default Footer;