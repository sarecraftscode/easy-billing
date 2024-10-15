import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Billing } from "../domains/entities/billing";
import formatDate from "../helpers/format-date";

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
  lineItemHeading: {
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "#0D92F4",
  },
  lineItemContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  lineItemHeadingText: {
    color: "#FFFFFF",
    fontSize: 10,
    width: "20%",
  },
  lineItemText: {
    color: "#555",
    fontSize: 10,
    width: "20%",
  },
  companyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  customerContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  companySection: {
    width: "45%",
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
          {billing.company && (
            <View style={[styles.companySection, { alignSelf: "flex-end" }]}>
              <Text style={styles.header}>Société émettrice</Text>
              <Text style={styles.product}>Nom: {billing.company?.name}</Text>
              <Text style={styles.product}>
                Adresse: {billing.company?.address}
              </Text>
              <Text style={styles.product}>
                Téléphone: {billing.company?.phone}
              </Text>
              <Text style={styles.product}>
                Email: {billing.company?.email}
              </Text>
              <Text style={styles.product}>
                SIRET: {billing.company?.siret}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.customerContainer}>
          {billing.customer && (
            <View
              style={[
                styles.companySection,
                { alignSelf: "flex-end", marginTop: 20 },
              ]}
            >
              <Text style={styles.header}>Société payeuse</Text>
              <Text style={styles.product}>Nom: {billing.customer?.name}</Text>
              <Text style={styles.product}>
                Adresse: {billing.customer?.address}
              </Text>
              <Text style={styles.product}>
                Téléphone: {billing.customer?.phone}
              </Text>
              <Text style={styles.product}>
                Email: {billing.customer?.email}
              </Text>
              <Text style={styles.product}>
                SIRET: {billing.customer?.siret}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.product}>
            Date d'émission: {billing.currentDate?.toLocaleDateString()}
          </Text>
        </View>

        {billing.lineItems && (
          <View style={[styles.section]}>
            <View>
              <View style={styles.lineItemHeading}>
                <Text style={styles.lineItemHeadingText}>Description</Text>
                <Text style={styles.lineItemHeadingText}>Prix unitaire</Text>
                <Text style={styles.lineItemHeadingText}>Quantité</Text>
                <Text style={styles.lineItemHeadingText}>Date</Text>
                <Text style={styles.lineItemHeadingText}>Prix total</Text>
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

const BillingPreview: React.FC<BillingPreviewProps> = ({ billing }) => {
  return (
    <div className="container">
      <PDFViewer width="100%" height={800}>
        <MyDocument billing={billing} />
      </PDFViewer>
    </div>
  );
};

export default BillingPreview;
