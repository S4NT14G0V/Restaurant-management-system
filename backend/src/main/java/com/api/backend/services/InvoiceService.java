package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.InvoiceModel;
import com.api.backend.repository.InvoiceRepo;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepo invoiceRepo;

    public List<InvoiceModel> obtainInvoiceList() {
        return invoiceRepo.findAll();
    }

    public InvoiceModel createInvoice(InvoiceModel invoice) {
        return invoiceRepo.save(invoice);
    }

    public InvoiceModel updateInvoice(InvoiceModel invoice) {
        return invoiceRepo.save(invoice);
    }

    public void deleteInvoice(int id) {
        invoiceRepo.deleteById(id);
    }
}
