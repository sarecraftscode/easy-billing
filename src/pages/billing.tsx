import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    fontSize: 14,
    marginBottom: 5,
  },
});

// Sample products data
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

// Create a PDF document component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View>
        <h1>Export to Excel Example</h1>
        <Text style={styles.title}>Product List</Text>
        {products.map((product) => (
          <View key={product.id} style={styles.section}>
            <Text style={styles.product}>
              {product.name} - ${product.price}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

function Pdf() {
  return (
    <div className="container">
      <h1>Generate PDF with react-pdf</h1>

      {/* PDF Download Link */}
      <PDFDownloadLink document={<MyDocument />} fileName="products.pdf">
        {({ loading }) =>
          loading ? (
            <button className="btn btn-secondary">Loading PDF...</button>
          ) : (
            <button className="btn btn-primary">Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default Pdf;
