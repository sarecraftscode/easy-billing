import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import formatDate from "../helpers/format-date";
import { Billing } from "../models/billing";

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  product: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  total: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
    color: "#000",
  },
  lineItemContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  lineItemText: {
    fontSize: 10,
    color: "#555",
    width: "20%",
  },
  companyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  companySection: {
    width: "45%",
  },
  lineItemsBorder: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
});

type MyDocumentProps = {
  billing: Billing;
};

// Create a PDF document component
const MyDocument = ({ billing }: MyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>Facture N°15</Text>

        <View style={styles.companyContainer}>
          {billing.emittingCompany && (
            <View style={styles.companySection}>
              <Text style={styles.header}>Société émettrice</Text>
              <Text style={styles.product}>
                Nom: {billing.emittingCompany?.name}
              </Text>
              <Text style={styles.product}>
                Adresse: {billing.emittingCompany?.address}
              </Text>
              <Text style={styles.product}>
                Téléphone: {billing.emittingCompany?.phone}
              </Text>
              <Text style={styles.product}>
                Email: {billing.emittingCompany?.email}
              </Text>
              <Text style={styles.product}>
                SIRET: {billing.emittingCompany?.siret}
              </Text>
            </View>
          )}

          {billing.payingCompany && (
            <View style={styles.companySection}>
              <Text style={styles.header}>Société payeuse</Text>
              <Text style={styles.product}>
                Nom: {billing.payingCompany?.name}
              </Text>
              <Text style={styles.product}>
                Adresse: {billing.payingCompany?.address}
              </Text>
              <Text style={styles.product}>
                Téléphone: {billing.payingCompany?.phone}
              </Text>
              <Text style={styles.product}>
                Email: {billing.payingCompany?.email}
              </Text>
              <Text style={styles.product}>
                SIRET: {billing.payingCompany?.siret}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.product}>
            Date de facturation: {billing.currentDate?.toLocaleDateString()}
          </Text>
        </View>

        {billing.lineItems && (
          <View style={[styles.section, styles.lineItemsBorder]}>
            <Text style={styles.header}>Désignations</Text>
            <View>
              <View style={styles.lineItemContainer}>
                <Text style={styles.lineItemText}>Description</Text>
                <Text style={styles.lineItemText}>Prix unitaire</Text>
                <Text style={styles.lineItemText}>Quantité</Text>
                <Text style={styles.lineItemText}>Date</Text>
                <Text style={styles.lineItemText}>Prix total</Text>
              </View>
              {billing.lineItems.map((item, index) => (
                <View key={index} style={styles.lineItemContainer}>
                  <Text style={styles.lineItemText}>{item.description}</Text>
                  <Text style={styles.lineItemText}>{item.unitPrice}</Text>
                  <Text style={styles.lineItemText}>{item.quantity}</Text>
                  <Text style={styles.lineItemText}>
                    {formatDate(item.date)}
                  </Text>
                  <Text style={styles.lineItemText}>{item.totalPrice}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.total}>Montant total: {billing.totalAmount}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

type BillingPreviewProps = {
  billing: Billing;
};

function BillingPreview({ billing }: BillingPreviewProps) {
  return (
    <div className="container">
      {/* PDF Download Link 
      <PDFDownloadLink document={<MyDocument />} fileName={generateFileName}>
        {({ loading }) =>
          loading ? (
            <button className="btn btn-secondary">Loading PDF...</button>
          ) : (
            <button className="btn btn-primary">Download PDF</button>
          )
        }
      </PDFDownloadLink>
      */}
      <PDFViewer width="100%" height={800}>
        <MyDocument billing={billing} />
      </PDFViewer>
    </div>
  );
}

export default BillingPreview;
