class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Membuat elemen tombol
    this.button = document.createElement("button");

    // Menyisipkan elemen tombol ke shadow DOM
    this.shadowRoot.append(this.button);

    // Menambahkan style yang bisa diperbarui dengan properti
    this.updateStyle();
  }

  // Mengambil atau mengubah teks dan warna tombol saat atribut diubah
  static get observedAttributes() {
    return ["label", "background"];
  }

  // Dijalankan saat atribut berubah
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      this.button.textContent = newValue; // Mengubah teks tombol
    }
    if (name === "background") {
      this.updateStyle(newValue); // Mengubah warna latar belakang
    }
  }

  // Fungsi untuk memperbarui style berdasarkan properti 'background'
  updateStyle(color) {
    const style = document.createElement("style");
    style.textContent = `
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: ${color || "#4CAF50"};
          color: white;
        }
        button:hover {
          background-color: ${color ? this.darkenColor(color) : "#45a049"};
        }
      `;

    // Menghapus style lama dan menyisipkan style baru
    this.shadowRoot.innerHTML = ""; // Bersihkan Shadow DOM
    this.shadowRoot.append(style, this.button); // Tambahkan ulang
  }

  // Fungsi untuk menggelapkan warna saat hover
  darkenColor(color) {
    // Menggunakan logika sederhana untuk mencerahkan warna
    // ini hanya contoh sederhana, untuk produksi bisa menggunakan library warna
    return color;
  }
}

// Mendefinisikan custom element `custom-button`
customElements.define("custom-button", CustomButton);
